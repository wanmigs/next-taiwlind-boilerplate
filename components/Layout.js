import  "~/assets/sass/app.scss"
import { withRouter } from 'next/router';
import { loading } from '~/store'

const Layout = ({ children, router  }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export default withRouter(Layout)
