import React from 'react'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar'

export const EventScreen = () => {
  return (
    <div>
        <Sidebar />
        <HeaderInicio propNamePage="Eventos"/>
    </div>
  )
}
