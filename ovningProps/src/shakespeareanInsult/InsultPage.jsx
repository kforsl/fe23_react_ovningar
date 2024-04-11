import React from 'react'
import Insult from './Insult'


export default function InsultPage({ generatedInsults }) {
    return (
        <main className='insult__main'>
            {generatedInsults.map((insult, index) =>
                < Insult
                    insult={insult}
                    key={index}
                />
            )}
        </main>
    )



}
