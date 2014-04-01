var glify = undefined;

var shader = {"vertex":"precision mediump float;\nprecision highp float;\nattribute vec2 a_pos;\nuniform mat4 u_posmatrix;\nvoid main ()\n{\n  vec4 tmpvar_1;\n  tmpvar_1.zw = vec2(0.0, 1.0);\n  tmpvar_1.xy = a_pos;\n  gl_Position = (u_posmatrix * tmpvar_1);\n  gl_PointSize = 2.0;\n}\n\n","fragment":"precision mediump float;\nprecision highp float;\nuniform vec4 u_color;\nvoid main ()\n{\n  gl_FragColor = u_color;\n}\n\n"};
