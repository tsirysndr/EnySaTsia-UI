import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingAnimation = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ flex: 0.7 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ContentLoader 
                rtl
                speed={2}
                width={400}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                style={{ width: 400, marginTop: 25 }}
              >
                <circle cx="30" cy="30" r="30" /> 
                <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
              </ContentLoader>
              <ContentLoader 
                rtl
                speed={2}
                width={400}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                style={{ width: 400, marginTop: 25 }}
              >
                <circle cx="30" cy="30" r="30" /> 
                <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
              </ContentLoader>
              <ContentLoader 
                rtl
                speed={2}
                width={400}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                style={{ width: 400, marginTop: 25 }}
              >
                <circle cx="30" cy="30" r="30" /> 
                <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
                <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
                <rect x="0" y="70" rx="5" ry="5" width="400" height="10" />
                <rect x="0" y="90" rx="5" ry="5" width="290" height="10" />
              </ContentLoader>
            </div>
          </div>
      </div>
    </div>
  </div>
)

export default LoadingAnimation