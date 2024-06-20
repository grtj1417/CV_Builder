import "../../css/control.css"

function ColorContronl({ data, handleImageUpload, handleColor1, handleColor2, loadSampleData }) {

    return (
        <div className="control">
            <div>
                <svg width="25" xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 35 35" x="0px" y="0px" fill="#213f71"><g><circle cx="7" cy="16" r="5" /><polygon points="7 27.64 6.09 26.81 6.83 23 7.17 23 7.91 26.81 7 27.64" /><path d="M14,26v5a1.0029,1.0029,0,0,1-1,1H1a1.0029,1.0029,0,0,1-1-1V26a6.97,6.97,0,0,1,2.11-5,6.9149,6.9149,0,0,0,2.75,1.66l-.84,4.32a.986.986,0,0,0,.3.92l2,1.84a1.0192,1.0192,0,0,0,1.36,0l2-1.84a.986.986,0,0,0,.3-.92l-.84-4.32A6.9149,6.9149,0,0,0,11.89,21,6.97,6.97,0,0,1,14,26Z" /><polygon points="26 0.58 26 4 29.42 4 26 0.58" /><path d="M25,6a1,1,0,0,1-1-1V0H9A3.0088,3.0088,0,0,0,6,3V9.08A5.5465,5.5465,0,0,1,7,9a6.9442,6.9442,0,0,1,3.0579.713A.9875.9875,0,0,1,11,9H25a1,1,0,0,1,0,2H11.89a7.0228,7.0228,0,0,1,1.5263,2.21A.9767.9767,0,0,1,14,13H25a1,1,0,0,1,0,2H14c-.0292,0-.0538-.0142-.0824-.0166A6.8424,6.8424,0,0,1,13.12,19.4a9.0891,9.0891,0,0,1,1.8939,2.5309A.9926.9926,0,0,1,16,21h9a1,1,0,0,1,0,2H16a.98.98,0,0,1-.6111-.2281A8.9413,8.9413,0,0,1,16,26a1,1,0,0,1,1-1h8a1,1,0,0,1,0,2H17a1,1,0,0,1-1-1v5a2.7719,2.7719,0,0,1-.18,1H27a3.0088,3.0088,0,0,0,3-3V6ZM20,7H11a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Zm5,12H15a1,1,0,0,1,0-2H25a1,1,0,0,1,0,2Z" /></g></svg>
                <div className="control-title">Resume</div>
            </div>
            <div>
                <button className="load-example" onClick={loadSampleData}>Load Example</button>
                <label  className="upload-photo">
                    Select file
                    <input type="file" onChange={handleImageUpload}/>
                </label>
                <label className="color-picker-label"
                    style={{ backgroundColor: data.color1 }}>
                    <input className="color-picker" type="color" onChange={handleColor1}/>
                </label>
                <label className="color-picker-label"
                    style={{ backgroundColor: data.color2 }}>
                    <input className="color-picker" type="color" onChange={handleColor2} />
                </label>
            </div>
        </div>
    )
}
export default ColorContronl;