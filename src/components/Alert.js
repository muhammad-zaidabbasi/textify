import React from 'react'

export default function Alert(props) {
  return (
//  props.alert && this is used for if props.alert is null not show if both r true then show

   props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show ` } role="alert">
   {props.alert.msg}  <strong>{props.alert.typ} </strong>
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
      
    
  )
}
