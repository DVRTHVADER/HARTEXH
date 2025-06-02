import React from 'react';

    const Footer = () => {
      return (
        <footer className="py-10 bg-secondary/30 text-center">
          <div className="container-custom">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Hartexh. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              Empowering Innovation, Engineering Excellence.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;