import { initializeApp } from "firebase/app"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDDPTC4A1RoBeETM79qt0P-LYWaKoyuOhA",
  authDomain: "vanlife-da010.firebaseapp.com",
  projectId: "vanlife-da010",
  storageBucket: "vanlife-da010.appspot.com",
  messagingSenderId: "141562649811",
  appId: "1:141562649811:web:d52a69fa47bfcb7ca38826"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db,"vans")

export async function getVans(){
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}



export async function getVan(id){
    const docRef =  doc(db,"vans",id)
    const snapshot = await getDoc(docRef)
    const van ={
        ...snapshot.data(),
        id:snapshot.id
    }
    
    return van
}



export async function getHostVans(){
    const q = query(vansCollectionRef,where("hostId","==","123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        // eslint-disable-next-line
        throw{
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
