import "../../css/personal.css"

function PersonalData({ data, handlePersonalData }) {
    return (
        <>
            <div className="personal-data-form form">
                <div>
                    <svg width="30" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-10.0 10.0 130.0 130.0" fill="rgb(223, 232, 244)">
                        <path d="m84.375 84.375c0.007812 3.3203-2.3594 6.1758-5.625 6.7773-9.4883 1.7227-19.109 2.5938-28.75 2.5977-9.6328-0.003906-19.25-0.86719-28.727-2.5859-3.2812-0.59375-5.6602-3.457-5.6484-6.7891 0.007812-8.2852 3.3047-16.227 9.1641-22.086 5.8594-5.8594 13.801-9.1562 22.086-9.1641h6.25c8.2852 0.007812 16.227 3.3047 22.086 9.1641 5.8594 5.8594 9.1562 13.801 9.1641 22.086zm-34.375-34.375c5.8008 0 11.367-2.3047 15.469-6.4062s6.4062-9.668 6.4062-15.469-2.3047-11.367-6.4062-15.469-9.668-6.4062-15.469-6.4062-11.367 2.3047-15.469 6.4062-6.4062 9.668-6.4062 15.469c0.007812 5.8008 2.3125 11.359 6.4141 15.461 4.1016 4.1016 9.6602 6.4062 15.461 6.4141z" /></svg>
                    <div className="form-header">Personal Data</div>
                </div>
                {data.info.map((element) => {
                    return (
                        <div key={element.name}>
                            <label id={element.name}>{element.name}</label>
                            <input
                                type="text"
                                maxLength={520}
                                placeholder={element.placeholder}
                                name={element.name}
                                value={element.text}
                                onChange={handlePersonalData}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default PersonalData;