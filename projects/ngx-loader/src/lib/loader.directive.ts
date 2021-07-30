import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
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
        private tmpRef: TemplateRef<any>
    ) { }

    @Input('dagLoader') loading: boolean = false;
    @Input() type: 'spinner' | 'bouncing' | 'pulsing' = 'pulsing';
    @Input() fullScreen: boolean = true;

    private viewIndex: number = undefined;

    ngOnChanges() {
        this.load()
    }


    private load() {
        if (this.loading) {
            /** svuota il container di tutto il contenuto */
            this.vcr.clear()

            /** crea lo spinner */
            const factory = this.createComponentFactory()
            const compRef = this.vcr.createComponent(factory)

            /** salva il numerod'indice della view */
            this.viewIndex = this.vcr.indexOf(compRef.hostView)
        } else {

            /** elimina lo spinenr */
            this.vcr.remove(this.viewIndex)

            /** ripristina il contenuto */
            this.vcr.createEmbeddedView(this.tmpRef)
        }
    }


    createComponentFactory(): ComponentFactory<SpinnerLoaderComponent | BouncingLoaderComponent | PulsingLoaderComponent> {
        let componentType: any
        switch (this.type) {
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
