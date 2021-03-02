import sweetalert2 from '../plugin/sweetalert2'

// import Noty from 'noty';

class Notification {
  toaster (message, type = 'success') {
    sweetalert2.Toast(message, type)
  }

  deleteAction () {
    // eslint-disable-next-line no-undef
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  }
}

// eslint-disable-next-line no-class-assign
export default Notification = new Notification()
