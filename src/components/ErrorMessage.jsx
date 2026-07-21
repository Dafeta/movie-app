// import React, { useState } from 'react'

const ErrorMessage = ({message}) => {
    return (
      <div className="alert alert-error bg-red-500 p-2 my-4">
        <span className="text-white">{message}</span>
      </div>
    )
  }

export default ErrorMessage