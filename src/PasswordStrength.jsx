import zxcvbn from "zxcvbn"

function PasswordStrength({password}) {
    const testResult = zxcvbn(password);
    let num = testResult.score * 100/4;
    const functionProgressColor = () => {
        switch (testResult.score){
            case 0 :
                return '#828282'
            case 1 :
                return '#ea1111'
            case 2 :
                return '#ffad00'
            case 3 :
                return '#9bc158'
            case 4 :
                return '#00b500'
            default :
                return "null"
        }
    }
    const createPassLabel = () => {
        switch (testResult.score){
            case 0 :
                return 'خیلی ضعیف'
            case 1 :
                return 'ضعیف'
            case 2 :
                return 'متوسط'
            case 3 :
                return 'خوب'
            case 4 :
                return 'قوی'
            default :
                return "null"
        }
    }
    const changePasswordColor = () => ({
        width : `${num}%`,
        background : functionProgressColor()
    })

    return (
        <div className="w-full max-w-md">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={changePasswordColor()}/>
            </div>
            <p className="text-xs py-1" style={{color : functionProgressColor()}}>{createPassLabel()}</p>
        </div>
    );
}

export default PasswordStrength;