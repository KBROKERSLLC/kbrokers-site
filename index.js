
export default function Home() {
  return (
    <div style={{
      backgroundColor: '#1E1A38',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ color: '#61dafb' }}>K Brokers AI Forecasting</h1>
      <p style={{ marginBottom: '30px' }}>Predict. Prepare. Prosper.</p>
      <a href="https://kbrokers-forecast.streamlit.app"
         style={{
           backgroundColor: '#61dafb',
           color: '#1E1A38',
           padding: '10px 20px',
           borderRadius: '5px',
           textDecoration: 'none',
           fontWeight: 'bold'
         }}>
         Launch Forecasting Tool
      </a>
    </div>
  );
}
