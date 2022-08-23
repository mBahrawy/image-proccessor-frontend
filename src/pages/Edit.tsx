import { useState, useRef } from 'react'

const Edit = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [resultedImage, setResultedImage] = useState<string>('')

  const formRef = useRef<any>(null)

  const submitForm = (event: any) => {
    event.preventDefault()
    setIsSuccess(false)
    setErrors([])
    setResultedImage("")

    const formData = new FormData(formRef.current)
    console.log(formData);
    
    sendData(formData)
  }

  const sendData = async (formData: FormData) => {
    const options: any = {
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
      cache: 'no-cache',
      body: formData,
    }

    try {
      const request = await fetch('http://localhost:4000/edit', options)
      const response = await request.json()

      if (response.status === 200) {
        setResultedImage(response.data.image_url)
        setIsSuccess(true)
        setErrors([])
      } else {
        setIsSuccess(false)
        throw new Error(JSON.stringify(response.error))
      }
    } catch (error: any) {

      try {
        const parsedError = JSON.parse(error.message)
        setIsSuccess(false)
        setErrors([...parsedError.message])

      } catch (e) {
        setErrors(["Server is not working"])

      }
    }
  }

  const loadFile = (event: any) => {
    const output: any = document.getElementById('preview')
    output.src = URL.createObjectURL(event.target.files[0])
    output.onload = () => {
      URL.revokeObjectURL(output.src)
    }
  }

  return (
    <>
      <div className='container px-md-5  py-5 flex-grow-1 d-flex flex-column'>
        <div className='row  justify-content-center flex-grow-1'>
          <div className='col-md-6 '>
            <h4 className='text-center mb-5'>Image editor online</h4>
            <form id='imageForm' ref={formRef} onSubmit={submitForm}>
              <div className='row p-0'>
                <div className='col-sm-6 mb-3'>
                  <label className='form-label'>width</label>
                  <input type='text' className='form-control' name='width' id='widthInput' placeholder='Put image width' />
                </div>

                <div className='col-sm-6 mb-3'>
                  <label className='form-label'>height</label>
                  <input type='text' className='form-control' name='height' id='heightInput' placeholder='Put image height' />
                </div>

                <div className='col-sm-6 mb-3'>
                  <label htmlFor='formFile' className='form-label'>
                    Select an image
                  </label>
                  <input name='image' className='form-control' type='file' accept='image/*' onChange={loadFile} id='fileInput' />
                </div>

                <div className='col-sm-6 mb-3'>
                  <label htmlFor='formFile' className='form-label'>
                    Save as
                  </label>

                  <select defaultValue='png' className='form-select' name='extension' id='extensionInput' aria-label='Default select example'>
                    <option value='png'>PNG</option>
                    <option value='jpg'>JPG</option>
                    <option value='jpeg'>JPEG</option>
                    <option value='gif'>GIF</option>
                    <option value='webp'>WEBP</option>
                  </select>
                </div>

                <div className='col-sm-12 mb-3'>
                  <button type='submit' className='btn btn-primary w-100 mb-3'>
                    Proccess image and download
                  </button>
                </div>

                <div className='col-sm-12 mb-3 text-danger' id='errorContainer'>
                  {isSuccess && errors.length === 0 && (
                    <h6 className='text-success'>
                      <b>Success, </b> <a href={resultedImage} target="_blank" download>Open image</a>
                    </h6>
                  )}
                  {!isSuccess && errors.length !== 0 && (
                    <>
                      <h6>
                        <b>You have the following errors:</b>
                      </h6>
                      <ul>
                        {errors.map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className='col-md-6'>
            <img src='#' alt='' id='preview' className='img-fluid w-100' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
