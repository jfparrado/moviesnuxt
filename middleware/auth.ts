
let cont =0
export default defineNuxtRouteMiddleware((to, from) => {
  // const user = useSupabaseUser()
  const user = {value:1}
  console.log('middleware user:', user.value)

  if (!user.value || user.value === null) {
    console.log('if')
    if (cont===0) {
        cont++
        return navigateTo('/login')
    }

  } else {
    console.log('else')
  }
})

