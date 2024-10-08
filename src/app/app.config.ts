import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'store-web-f30cf',
        appId: '1:1004079061755:web:09d2471cbdc43bb0636e5e',
        storageBucket: 'store-web-f30cf.appspot.com',
        apiKey: 'AIzaSyBy3yl5QNhYBL1PWGb60hn_3Qv63qsOOOM',
        authDomain: 'store-web-f30cf.firebaseapp.com',
        messagingSenderId: '1004079061755',
        measurementId: 'G-K9GGXXZ8V7',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
