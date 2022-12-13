import "./Main.css";

const Main = () => {
    let ttvalue=500
    let  passing= 125
    

const show=()=>{

let a=document.getElementById('m1').value
let b=document.getElementById('m2').value
let c=document.getElementById('m3').value
let d=document.getElementById('m4').value
let e=document.getElementById('m5').value

let p1=Number(a)
let p2=Number(b)
let p3=Number(c)
let p4=Number(d)
let p5=Number(e)

let t=p1+p2+p3+p4+p5
let p=t/ttvalue*100;

document.getElementById('total').value=t;
document.getElementById('per').value=p;


if(t<=passing){
document.getElementById('fail').style.display="block"
document.getElementById('pass').style.display="none"
document.getElementById('main').style.background="red"
}

else{
    document.getElementById('fail').style.display="none"
document.getElementById('pass').style.display="block"
document.getElementById('main').style.background="green"

}


}


  return (
    <>
      <section className="h-screen  w-full flex bg-white items-center justify-center">
        <div id="main" className="w-1/2 h-5/6 bg-red-500  flex-col justify-between flex shadow-black shadow-2xl">
          <div className="flex w-full h-4/6 border-b-2 border-black">
            <div className="w-1/2 h-full flex-col flex items-center justify-evenly">
                <h1 className="text-white">Subjects</h1>
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="name"/>
            </div>
            <div className="w-1/2 h-full flex items-center flex-col  justify-evenly">
                <h1 className="text-white">Marks</h1>
              <input id="m1" type="number" placeholder="number"/>
              <input id="m2" type="number" placeholder="number"/>
              <input id="m3" type="number" placeholder="number"/>
              <input id="m4" type="number" placeholder="number"/>
              <input id="m5" type="number" placeholder="number"/>
            </div>
          </div>
          
          <div className="flex items-center  pl-6 w-full h-12 ">
            <span className="text-white" >Toatl:</span>
            <span className="pl-2"><input id="total" type="number"  placeholder="number"/></span>
          </div>
          <div className="flex items-center pl-6 w-full h-12 border-b-2 border-black ">
          <span className="text-white ">PerC:</span>
            <span className="pl-2"><input id="per" type="number" placeholder="number" /></span>
          </div>
          <div className="flex item-center justify-evenly pl-6 w-full h-12 ">
           <span className="w-1/2 flex justify-center "> <button className="w-16 h-8 bg-slate-500 mt-2" onClick={show}>submit</button></span>
            <span className="w-1/2 flex justify-evenly">
            <span className="font-bold bg-green-900 w-16 h-8 text-center mt-2 hidden" id="pass" >pass</span>
            <span className="font-bold bg-red-600 w-16 h-8 text-center mt-2 hidden" id="fail">fail</span>
            </span>
          </div>


        </div>
          
      </section>
    </>
  );
};

export default Main;
