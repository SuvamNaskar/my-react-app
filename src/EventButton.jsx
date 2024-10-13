
function EventButton() {
    
    const handleClick = ()=> console.log("OUCH!");
    const handleClick2 = (name)=> console.log(`${name} stop clicking me!`);

    let count = 0;
    const countHandler = (e)=>{
        count++;
        e.target.textContent = `Count: ${count}`
    }
    // return (
    //     <>
    //         <button onClick={() => handleClick2("Bro")}>Click Me</button>
    //     </>
    // );
    return (
        <>
            <button onClick={(e)=>countHandler(e)}>Count: {count}</button>
        </>
    );
}

export default EventButton