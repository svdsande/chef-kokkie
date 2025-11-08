import { ngMocks } from 'ng-mocks';
import { DefaultTitleStrategy, TitleStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MockService } from 'ng-mocks';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone/index.mjs';
import './jest-global-mocks';

setupZoneTestEnv();

ngMocks.autoSpy('jest');

ngMocks.defaultMock(TitleStrategy, () => MockService(DefaultTitleStrategy));

ngMocks.globalKeep(ApplicationModule, true);
ngMocks.globalKeep(CommonModule, true);
ngMocks.globalKeep(BrowserModule, true);
