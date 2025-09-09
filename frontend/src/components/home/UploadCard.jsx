import { useRef, useState } from 'react'

function UploadCard() {
  const fileInputRef = useRef(null)
  const [selectedFiles, setSelectedFiles] = useState([])

  function handleSelectClick() {
    fileInputRef.current?.click()
  }

  function handleFilesChange(event) {
    const files = Array.from(event.target.files || [])
    setSelectedFiles(files)
  }

  return (
    <section className="upload">
      <div className="upload-card">
        <div className="upload-icon" aria-hidden>⬆️</div>
        <h2 className="upload-title">JPG to PDF</h2>
        <p className="upload-subtitle">or click to browse your files</p>
        <button className="btn-primary" onClick={handleSelectClick}>Select JPG images</button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,.jpg,.jpeg"
          multiple
          onChange={handleFilesChange}
          style={{ display: 'none' }}
        />
        {selectedFiles.length > 0 && (
          <div style={{ marginTop: 12, color: 'var(--muted)' }}>
            {selectedFiles.length} file(s) selected
          </div>
        )}
      </div>
    </section>
  )
}

export default UploadCard
