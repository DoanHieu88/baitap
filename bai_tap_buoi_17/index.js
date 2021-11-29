// component count second
let interval;
class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            second: 0,
            show: true
        }
    }

    tick(){
        this.setState({
            second: this.state.second +1
        })
    }
        
    componentDidMount(){
        interval =  setInterval(() => {
              this.tick()
          }, 1000);
  
          console.log("componentDidMount")
      }


   showComponent=()=>{
       this.setState({
           show: !this.state.show
       });
   }
    render(){
        return(
            <div>
               <h1> {this.state.second} </h1> 
               <button onClick={this.showComponent}>off</button>
               {this.state.show ? (<Test/>) : null}
            </div>
        )
    }
}

//Mount-Unmount
class Test extends React.Component{
    componentWillUnmount(){
        clearInterval(interval);
        console.log("componentWillUnmount")
    }
    render(){
        return <h1>test</h1>
    }
}

//component main chương trình
class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Timer/>
            </div>
        )
    }

}

ReactDOM.render(<Main/>,document.getElementById("root"));