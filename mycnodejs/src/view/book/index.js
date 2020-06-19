import React, { Component } from 'react'
import data from "./data"
import PublicCard from "../../components/public_card"

class Book extends Component {
  render() {
    return (
      <div className="bookBox">
        <div className="bookMain wrap">
          <h2>教程专区</h2>
          {/* <Card 
            title="Node.js入门"
            loading={false}
            type="inner"
          > */}
          {/* </Card> */}


          {/* 封装card组件 */}
            {/* {data.map((item,index)=>(
              <Card title={item.title} type="inner" key={index}>
                <div 
                  dangerouslySetInnerHTML={{
                    __html:item.content
                  }}
                >
                </div>  
              </Card>  
            ))} */}
        
            <PublicCard data={data}></PublicCard>
              
            
          
        </div>  
      </div>
    )
  }
}

export default Book