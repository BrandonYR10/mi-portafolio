#!/usr/bin/env python3
"""
Servidor de desarrollo simple para el portafolio
Uso: python dev-server.py
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuración
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Añadir headers para desarrollo
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    """Inicia el servidor de desarrollo"""
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Servidor iniciado en http://localhost:{PORT}")
        print(f"📁 Directorio: {DIRECTORY}")
        print("🔄 Presiona Ctrl+C para detener el servidor")
        print("🌐 Abriendo navegador...")
        
        # Abrir navegador automáticamente
        try:
            webbrowser.open(f'http://localhost:{PORT}')
        except:
            print("⚠️  No se pudo abrir el navegador automáticamente")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")
            httpd.shutdown()

if __name__ == "__main__":
    main() 