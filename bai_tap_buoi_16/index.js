const app = document.querySelector(".root");

class MyApp extends React.Component{
    render(){
        return(
           <div className="main">
                <Header/>
                <Body/> 
                <Footer/>   
           </div>
        )
    }
}

// phần header
class Header extends React.Component{
    render(){
        return(
            <h1>Header</h1>
        )
    }
}

// phần body
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "hieu",
                age: 21,
                sex: "male" 
            }
        }
    }

    clickButton = ()=>{
        this.setState({
            count: Math.floor(Math.random()*100),
        });
    }

    render(){
        return(
            <div className="main">
                <p>{this.state.count}</p>
                <button onClick={this.clickButton}>Click me</button>  
            </div>
        )
    }

}

//phần footer
class Footer extends React.Component{
    render(){
        return(
            <h1>Footer</h1>
        )
    }
}

ReactDOM.render(<MyApp/>,app)