 import "./UseForm"

const Exercise17Gethub = () => {

    const {data,loading,Error} = UseForm('https://api.github.com/users/ismaaci');
  

    if(loading) return <h1>loading ........</h1>

   
  return (
    <div>
        <span>{data.login}</span>
        
        
        
    </div>
  )
}

export default Exercise17Gethub;
