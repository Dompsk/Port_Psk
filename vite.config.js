import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/Port_Psk/',   <-- ลบบรรทัดนี้ออก หรือเปลี่ยนเป็น '/'
  base: '/', 
})