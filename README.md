# ngx-loader

spinner loader directive for angular project
See [demo](https://ildug.github.io/ngx-loader/)

## Install 
```
npm i @ildug/ngx-loader
```


## Usage

Import the module **NgxLoaderModule** into the main module of App.

``` typescript
...
import { NgxLoaderModule } from 'ngx-loader';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ...,
        NgxLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
Use th structural diretcive in Template. Prefix the directive with *. 

Use a variable to trigger the spinner.
**Always use a parent container or div.**


``` html
    <div class="box">
        <div *dagLoader="loading">
            <h1>...it's not a moon it's a space station...</h1>
        </div>
    </div>
```

with options:
``` html
    <div class="box">
        <div *dagLoader="loading; color:'#e4b2b2'; fullScreen: false; type:'pulsing';">
            <h1>It's a trap!</h1>
        </div>
    </div>
```

## Options
| | |
| ---: | --- |
| **color**: | *Spinner color as HEX string* |
| **fullScreen**: | *whether spinner cover the parent element or the whole screen.* |
| **type**: | *spinner type. Select between PULSING (default),  BOUNCING or SPINNER. |


