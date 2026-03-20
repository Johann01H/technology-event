import {CustomHeader,CustomFooter} from './components'

export default function layoutLanding({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomHeader/>
      {children}  
      <CustomFooter/>
    </div>
  )
}
