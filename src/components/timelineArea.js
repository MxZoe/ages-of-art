import React, { useState, useCallback } from 'react'
import { ArtCard } from './ArtCard'

const ART = [
    { id: 1, url: "https://images.metmuseum.org/CRDImages/ad/original/DP207616.jpg"  },
    { id: 2, name: 'cat' },
]

export const List = () => {

    const [pets, setPets] = useState(PETS)

    const movePetListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = pets[dragIndex]
            const hoverItem = pets[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setPets(pets => {
                const updatedPets = [...pets]
                updatedPets[dragIndex] = hoverItem
                updatedPets[hoverIndex] = dragItem
                return updatedPets
            })
        },
        [pets],
    )

    return (
        <div style={style}>{pets.map((pet, index) => (
            <ListItem
                key={pet.id}
                index={index}
                text={pet.name}
                moveListItem={movePetListItem}
            />
        ))}
        </div>
    )
}