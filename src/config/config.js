const conf = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_ENDPOINT),
    appwriteProjectId: String(process.env.REACT_APP_PROJECT_ID),
    appwriteDataBaseId: String(process.env.REACT_APP_DATABASE_ID),
    appwriteCollectionId: String(process.env.REACT_APP_COLLECTION_ID),
    appwriteBucketId: String(process.env.REACT_APP_BUCKET_ID),

}

export default conf