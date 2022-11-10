const React = require('react')
const Def = require('../default.js')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Post</h1>
                <form method='POST' action={`/posts/${data.post.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' id='title' name='title' 
                        value={data.post.title}required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='post'>Post</label>
                        <input className='form-control' id='post' name='post' value={data.post.post} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Pic</label>
                        <input className='form-control' type='url' id='pic' name='pic' value={data.post.pic} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='user'>Username</label>
                        <input className='form-control' id='user' name='user' value={data.post.user}/>
                    </div>
                    <input className='btn-primary' type='submit' value='Update Post'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form