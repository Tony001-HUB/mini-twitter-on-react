
/* №1 Свойства и состояния компонентов. События в React 
class WhyAmI extends Component{
    constructor(props){
        super(props);
        this.state = {
            years: 10
        }
    }

    //setState() перезапись объекта внутреннего состояние 
    nextYear = () => {
        this.setState(state => ({years: ++state.years}))
    }

    render(){
        const {name, surtName, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick = {this.nextYear}>++</button>
                <h1>меня зовут {name} а моя фамилия {surtName}  мне {years} </h1>
                <a href = {link}>мой профиль</a>
            </>
        )
    }
}

const All = () => {
    return(
    <>
    <WhyAmI name = "Paxan" surtName = "Batbka" link = ".com"/>
    <WhyAmI name = "Paxan" surtName = "Batbka" link = ".com"/>
    <WhyAmI name = "Paxan" surtName = "Batbka" link = ".com"/>
    </>
    )
}
*/