import React from 'react'
import LastViewItem from './last-view-item'

type Props = {}

export default function LastViewed({}: Props) {
  return (
    <div>
        <span className='title'>Son görüntülenen</span>
        
        <div className='grid md:grid-cols-4 gap-2 mt-4'>
            <LastViewItem />
            <LastViewItem />
            <LastViewItem />
            <LastViewItem />
        </div>
        
    </div>
  )
}