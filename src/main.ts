import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './app/main/main.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);