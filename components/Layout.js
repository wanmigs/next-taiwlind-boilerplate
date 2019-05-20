import  "~/assets/sass/app.scss"
import { withRouter } from 'next/router';


const Layout = ({ children, router  }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export default withRouter(Layout)
