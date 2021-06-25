const styleObj = {
  color: 'red',
  fontSize: '20px'
}

function App() {
  return (
    <div>
      <div style={{ color: 'red' }}>
        样式处理
      </div>
      <div style={styleObj}>
        样式对象
      </div>
    </div>
  );
}

export default App;
