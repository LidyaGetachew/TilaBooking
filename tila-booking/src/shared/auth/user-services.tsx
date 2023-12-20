// export function getCurrentUserRoles() {
//   const d: any = JSON.parse(localStorage.getItem('user') || '')
//   console.log('roles..')
//   return d
// }

export const userService = {
  get getCurrentUserRoles(): any {
    const user = localStorage.getItem('user')
    if (user) {
      const data = JSON.parse(user)

      return data.roles
    }
    return []
  },
  get currentRole(): any {
    const role = localStorage.getItem('user')
    return role ? JSON.parse(role) : null
  },
  get currentUser(): any {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },
  get currentUserId(): string {
    const data = localStorage.getItem('user')

    return data ? JSON.parse(data).id : null
  },

  get token(): any {
    const data = localStorage.getItem('token')
    return data ? data : null
  },
  get refreshToken(): string {
    const data = localStorage.getItem('refreshToken')

    return data ? JSON.parse(data) : null
  },
}