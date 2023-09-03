import { Component, Directive, Input, OnChanges, Renderer2, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';

@Directive({
   selector: '[dagLoader]'
})
export class NgxLoaderDirective implements OnChanges {

   constructor(
      private vcr: ViewContainerRef,
      private tmpRef: TemplateRef<any>,
      private r: Renderer2
   ) { }

   @Input('dagLoader') loading: boolean = false;
   @Input('type') dagLoaderType: 'spinner' | 'bouncing' | 'pulsing' = 'pulsing';
   @Input('fullScreen') dagLoaderFullScreen: boolean = true;
   @Input('color') dagLoaderColor: string = '#333';

   private viewIndex: number = undefined;

   ngOnChanges(changes: SimpleChanges): void {
      this.load();
   }


   private load() {
      if (this.loading) {

         /** assegna la posizione RELATIVE al container */
         const { parentElement }: HTMLElement = this.tmpRef.elementRef.nativeElement
         this.r.setStyle(parentElement, 'position', 'relative')


         /** crea lo spinner */
         const cmpType = this.selectLoaderComponent();
         const cmpRef = this.vcr.createComponent(cmpType);


         /** assegna il colore */
         cmpRef.instance.color = this.dagLoaderColor;
         cmpRef.instance.fullScreen = this.dagLoaderFullScreen;


         /** salva il numerod'indice della view */
         this.viewIndex = this.vcr.indexOf(cmpRef.hostView)
      } else {

         /** elimina lo spinner */
         this.vcr.remove(this.viewIndex);


         /** riristina il contenuto */
         if (this.vcr.length == 0)
            this.vcr.createEmbeddedView(this.tmpRef);
      }
   }

   /**
    * seleziona la classe del compent da istanziare
    * scegliendo tra i vari tipi di Loader
    */
   private selectLoaderComponent(): Type<SpinnerLoaderComponent | BouncingLoaderComponent | PulsingLoaderComponent> {
      let componentType: Type<SpinnerLoaderComponent | BouncingLoaderComponent | PulsingLoaderComponent>;

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

      return componentType
   }
}
