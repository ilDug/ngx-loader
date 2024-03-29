# ngx-loader

[![Publish Node Package](https://github.com/ilDug/ngx-loader/actions/workflows/publish.yml/badge.svg)](https://github.com/ilDug/ngx-loader/actions/workflows/publish.yml)

spinner loader directive for angular project

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
            <h1>B</h1>
        </div>
    </div>
```

with options:
``` html
    <div class="box">
        <div *dagLoader="loading; color:'#e4b2b2'; fullScreen: false; type:'pulsing';">
            <h1>B</h1>
        </div>
    </div>
```

## Options
| | |
| ---: | --- |
| **color**: | *Spinner color as HEX string* |
| **fullScreen**: | *whether spinner cover the parent element or the whole screen.* |
| **type**: | *spinner type. Select between PULSING (default),  BOUNCING or SPINNER. |


