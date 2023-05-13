import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "../../../Css/drap.css";
const DATA = [
    {
        id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
        name: "Walmart",
        items: [
            { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
            { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
        ],
        tint: 1,
    },
    {
        id: "487f68b4-1746-438c-920e-d67b7df46247",
        name: "Indigo",
        items: [
            {
                id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
                name: "Designing Data Intensive Applications",
            },
            { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
        ],
        tint: 2,
    },
    {
        id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
        name: "Lowes",
        items: [
            { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
            { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
        ],
        tint: 3,
    },
];



const Drag = () => {
    const [store, setStore] = useState(DATA)
    const handelDragDrop = (result) => {
        const { source, destination, type } = result

        if (!destination) return;
        if (source.draggableId === destination.draggableId &&
            source.index === destination.index)
            return

        if(type==="group"){
            const reorderedStored=[...store]
            const sourceIndex=source.index
            const destinationIndex=destination.index
            const [removeStore]=reorderedStored.splice(sourceIndex,1)
            reorderedStored.splice(destinationIndex,0,removeStore)

            return setStore(reorderedStored)
        }
        const storeSourceIndex=store.findIndex((store)=>store.id===source.droppableId)
        const storeDestinationIndex=store.findIndex((store)=>store.id===destination.droppableId)
        const newSourceitems=[...store[storeSourceIndex].items]
        const newDestinationItems=
        source.droppableId !==destination.droppableId  
        ?[...store[storeDestinationIndex].items]
        :newSourceitems

        const [deletedItem]=newSourceitems.splice(source.index)
        newDestinationItems.splice(destination.index,0,deletedItem)

        const newStores=[...store]
        newStores[storeSourceIndex]={
            ...store[storeSourceIndex],
            items:newSourceitems
        }
      
        newStores[storeDestinationIndex]={
            ...store[storeDestinationIndex],
            items:newDestinationItems
        }

        setStore(newStores)
    }
    return (
        <div className='layout_wraper'>
            <div className="card">
                <DragDropContext
                    onDragEnd={handelDragDrop}>
                    <div className="header">
                        <h3>Shoping List</h3>
                    </div>
                    <Droppable
                        droppableId='ROOT' type='group'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {store.map((item, index) => (
                                    <Draggable
                                        draggableId={item.id}
                                        key={item.id}
                                        index={index}>
                                        {(provided) => (
                                            <div 
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}>
                                                <StoreList name={item.name} items={item.items} id={item.id}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

function StoreList({name,items,id,store}){
    return(
        <Droppable droppableId={id}>
            {(provided)=>{
                return (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        <div className="store-container">
                            <h3>{name}</h3>
                        </div>
                        <div className="items-container">
                            {items.map((item,index)=>(
                                <Draggable draggableId={item.id} index={index} key={id}>
                                    {(provided)=>(
                                        <div className="item-container"
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}>
                                            <h4>{item.name}</h4>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                        {provided.placeholder}
                    </div>
                )
            }}
        </Droppable>
    )
}

export default Drag
