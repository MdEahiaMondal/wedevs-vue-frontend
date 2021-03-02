import Swal from 'sweetalert2'

window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

class sweetalert2 {
  Toast (message, type = 'success') {
    Toast.fire({
      icon: type,
      title: message
    })
  }
}

// eslint-disable-next-line no-class-assign,new-cap
export default sweetalert2 = new sweetalert2()
