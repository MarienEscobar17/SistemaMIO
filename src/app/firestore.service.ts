import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  create_NewStudent(record){
    return this.firestore.collection('SistemaTransporte').add(record);
  }
  read_Students(){
    return this.firestore.collection('SistemaTransporte').snapshotChanges();
  }
  read_Student(recordID){
    return this.firestore.collection('SistemaTransporte').doc(recordID).snapshotChanges(); 
  }
  update_Student(recordID, record){
    this.firestore.doc('SistemaTransporte/'+ recordID).update(record);
  }
  delete_Student(record_id){
    this.firestore.doc('SistemaTransporte/'+ record_id).delete();
  }
}
