export default {
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: "...",
        authDomain: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "...",
        measurementId: "..."
      },
      services: {
        auth: true,
        firestore: true,
        storage: true
      }
    }
  ]
}
