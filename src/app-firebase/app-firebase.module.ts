import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const firebase = {
  apiKey: 'AIzaSyD9ltSJ8EBVeaiSDfk9u2N0MfhNcLOcS-w',
  authDomain: 'wines-12389.firebaseapp.com',
  databaseURL: 'https://wines-12389.firebaseapp.com',
  projectId: 'wines-12389',
  storageBucket: 'siddajmera-dev.appspot.com',
  messagingSenderId: '483487617394',
};

@NgModule({
  imports: [AngularFireModule.initializeApp(firebase), AngularFirestoreModule],
  exports: [AngularFirestoreModule],
})
export class AppFirebaseModule {}
