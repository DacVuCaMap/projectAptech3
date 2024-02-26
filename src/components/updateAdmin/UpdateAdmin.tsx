import './updateAdmin.scss'
type Props = {
    slug: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const UpdateAdmin = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //fetch
    }
  return (
    <div className='update'>
        <div className='modal'>
            <span className='close' onClick={()=>props.setOpen(false)}>X</span>
            <h1>Update {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                <div className='item'>
                    <label>User Name</label>
                    <input type='text' />
                    <label>Date Of Birth</label>
                    <input type='date'/>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Phone</label>
                    <input type='text'/>                
                </div>
               <button className='btn-send'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateAdmin