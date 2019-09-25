// import React  from 'react'
// import '../style/style.css'
// import Blog from './blog'

// class Info extends Component {
//     constructor(){
//         super()
//         this.state ={
//             posts:[],
//             currentPost:{text:'',key:''},
//         }
//     }
//     handleInput = e =>{
//         const itemText = e.target.value
//     const currentItem = { text: itemText, key: Date.now() }
//     this.setState({
//       currentItem,
//     })
//   }
//         // console.log("Hello everyone")
//     }
//     addPost=e=>{

//         e.preventDefault()
//         const newPost = this.state.currentItem
//     if (newItem.text !== '') {
//       console.log(newPost)
//       const posts = [...this.state.items, newItem]
//       this.setState({
//         posts: posts,
//         currentItem: { text: '', key: '' },
//       })
//     }
//         // console.log("Add a Post")

//   };
    
       
//   render() {
//     return (
//       <div className="pages">
//           <Blog addItem={this.addItem} 
//           inputElement={this.inputElement}
//           handleInput={this.handleInput}
//           currentItem={this.state.currentItem}         
          
//           />
//       </div>
//     )
//   }
// }
// export default Info