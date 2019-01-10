import { toast } from "react-toastify";

const metadata = {
  contentType: [
    "image/jpeg",
    "image/png"
  ]

};


export const uploadLogo = (file) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    const firebase = getFirebase();
    const storageRef= firebase.storage()
    console.log('from the action',file)
    const firestore = getFirestore();
    storageRef.ref(`projectLogo/${file.name}`).put(file || file[0]).then(()=>{
      storageRef.ref (`projectLogo/${file.Name}`).getDownloadURL ().then((res)=>{
        const downloadUrl = JSON.stringify(res)
        firestore.collection('projectLinks').add({
          imageName: file.name,
          imageUrl: downloadUrl
        })
        toast.success(`Images SuccessFully Went Through`);
        dispatch({ type: 'PROJ_LOGO_ADDED', file, downloadUrl });
      })
    }).catch((err)=>{
      toast.error("Error! Firebase Didn't Get the Images & The URLs");
      dispatch({type: 'PROJ_LOGO_NOT_ADDED', err})
    })
  }
};
export const recallLogos = (file) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    getFirebase ().storage ().ref (`projectLogo/${file.Name}`).getDownloadURL ()
    .then((res)=>{
      toast.success(`Images SuccessFully Came Through`);
      dispatch({ type: 'PROJ_LOGO_URL', res });
    })
    .catch((err)=>{
      toast.error("Error! Firebase Didn't Get the Images URL");
      dispatch({type: 'PROJ_LOGO_NOT_URL', err})
    })
  }
}
