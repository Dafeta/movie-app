import React, { useState } from 'react'

const ErrorMessage = ({message}) => {
    return (
      <div className="alert alert-error my-4">
        <span className="bg-red-500 ">{message}</span>
      </div>
    )
  }

export default ErrorMessage