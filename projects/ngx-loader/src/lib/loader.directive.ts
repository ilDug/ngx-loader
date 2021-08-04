import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, OnChanges, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';

@Directive({
    selector: '[dagLoader]'
})
export class LoaderDirective implements OnChanges {
    constructor(
        private vcr: ViewContainerRef,
        private cfr: ComponentFactoryResolver,
        private tmpRef: TemplateRef<any>,
        // private el: ElementRef,
        private r: Renderer2
    ) { }

    @Input('dagLoader') loading: boolean = false;
    @Input() dagLoaderType: 'spinner' | 'bouncing' | 'pulsing' = 'pulsing';
    @Input() dagLoaderFullScreen: boolean = true;
    @Input() dagLoaderColor: string = '#333';

    private viewIndex: number = undefined;

    ngOnChanges() {
        this.load()
        console.log(
            this.dagLoaderType,
            this.dagLoaderColor,
            this.dagLoaderFullScreen
        );

    }


    private load() {
        if (this.loading) {

            /** assegna la posizione RELATIVE al container */
            const { parentElement }: HTMLElement = this.tmpRef.elementRef.nativeElement
            this.r.setStyle(parentElement, 'position', 'relative')


            /** determina le dimensioni del parent */
            // const { clientWidth: w, clientHeight: h } = parentElement
            // console.log(w, h);

            /** fissa le dimensioni del parent */
            // this.r.setStyle(parentElement, 'width', `${w}px`)
            // this.r.setStyle(parentElement, 'height', `${h}px`)


            /** svuota il container di tutto il contenuto */
            // this.vcr.clear()


            /** crea lo spinner */
            const factory = this.createComponentFactory()
            const compRef = this.vcr.createComponent(factory)

            /** assegna il colore */
            compRef.instance.color = this.dagLoaderColor;
            compRef.instance.fullScreen = this.dagLoaderFullScreen;



            /** salva il numerod'indice della view */
            this.viewIndex = this.vcr.indexOf(compRef.hostView)
        } else {

            /** elimina lo spinenr */
            this.vcr.remove(this.viewIndex)


            /** ripristina il contenuto */
            if (this.vcr.length === 0)
                this.vcr.createEmbeddedView(this.tmpRef)
        }
    }





    createComponentFactory(): ComponentFactory<SpinnerLoaderComponent | BouncingLoaderComponent | PulsingLoaderComponent> {
        let componentType: any
        switch (this.dagLoaderType) {
            case 'spinner':
                componentType = SpinnerLoaderComponent
                break;

            case 'bouncing':
                componentType = BouncingLoaderComponent
                break;

            case 'pulsing':
                componentType = PulsingLoaderComponent
                break;

            default:
                throw new Error("Tipo di loader non specificato");
                break;
        }

        const cf: ComponentFactory<SpinnerLoaderComponent | BouncingLoaderComponent | PulsingLoaderComponent> = this.cfr.resolveComponentFactory(componentType)
        return cf;
    }

}
