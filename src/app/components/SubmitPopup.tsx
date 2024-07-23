import React from 'react'

const SubmitPopup = ({ msg, onClose }: any) => {
    console.log(msg)
    return (
        <div className="fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-50">

            <div className="bg-white p-8 rounded shadow-lg">
                {/* <FaCrosshairs color='#000' /> */}
                <h2 className="text-2xl mb-4 text-black">Thank You!</h2>
                <p className='text-2xl mb-4 text-black'>{msg}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default SubmitPopup