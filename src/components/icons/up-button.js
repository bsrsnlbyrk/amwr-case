import React from "react";

const UpButton = ({ width = "16", height = "16" }) => (
  <svg
    fill="#000000"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 592.016 592.015"
  >
    <g>
      <g>
        <g>
          <path
            d="M462.914,387.931L338.962,252.045c-10.99-12.049-26.646-18.959-42.954-18.959c-16.308,0-31.964,6.911-42.955,18.959
				L129.102,387.931c-7.975,8.742-13.045,19.496-14.663,31.101c-1.492,10.701,0.039,21.613,4.427,31.557
				c4.388,9.942,11.418,18.427,20.331,24.537c9.664,6.625,21.026,10.127,32.859,10.127h247.904c11.833,0,23.195-3.502,32.859-10.127
				c8.912-6.11,15.942-14.595,20.33-24.537c4.389-9.943,5.919-20.855,4.427-31.557C475.959,407.427,470.888,396.672,462.914,387.931
				z M419.96,442.413H172.056c-13.295,0-20.263-15.788-11.304-25.61l123.952-135.887c3.034-3.326,7.169-4.989,11.304-4.989
				s8.27,1.663,11.304,4.989l123.952,135.887C440.223,426.624,433.255,442.413,419.96,442.413z"
          />
          <path
            d="M419.959,485.752H172.055c-11.934,0-23.394-3.532-33.142-10.215c-8.989-6.162-16.08-14.72-20.505-24.747
				c-4.426-10.028-5.969-21.034-4.464-31.828c1.631-11.704,6.745-22.551,14.788-31.368l123.951-135.886
				c11.085-12.153,26.877-19.123,43.325-19.123c16.447,0,32.238,6.97,43.323,19.123l123.952,135.886
				c8.044,8.818,13.157,19.665,14.787,31.368c1.505,10.795-0.038,21.8-4.465,31.828c-4.425,10.026-11.515,18.584-20.504,24.747
				C443.354,482.22,431.893,485.752,419.959,485.752z M296.008,233.585c-16.167,0-31.689,6.851-42.585,18.796L129.471,388.268
				c-7.907,8.668-12.934,19.329-14.537,30.833c-1.479,10.608,0.039,21.427,4.389,31.285c4.351,9.857,11.32,18.27,20.156,24.327
				c9.58,6.567,20.845,10.039,32.576,10.039h247.904c11.731,0,22.996-3.472,32.577-10.039c8.836-6.059,15.805-14.471,20.155-24.327
				c4.351-9.857,5.868-20.676,4.389-31.285c-1.603-11.503-6.628-22.165-14.535-30.833L338.593,252.382
				C327.696,240.437,312.175,233.585,296.008,233.585z M419.96,442.913H172.056c-6.352,0-11.89-3.609-14.455-9.42
				s-1.499-12.335,2.781-17.027l123.952-135.887c2.987-3.274,7.242-5.152,11.673-5.152s8.687,1.878,11.673,5.152l123.952,135.887
				c4.28,4.692,5.346,11.217,2.781,17.027S426.312,442.913,419.96,442.913z M296.008,276.426c-4.151,0-8.137,1.759-10.934,4.826
				L161.122,417.139c-4.01,4.396-5.008,10.507-2.606,15.95c2.402,5.442,7.59,8.823,13.54,8.823H419.96
				c5.949,0,11.138-3.381,13.54-8.824c2.401-5.442,1.403-11.554-2.605-15.949L306.942,281.252
				C304.145,278.185,300.159,276.426,296.008,276.426z"
          />
        </g>
        <g>
          <path
            d="M591.516,524.857V67.159c0-32.058-26.082-58.14-58.14-58.14H58.64c-32.059,0-58.14,26.082-58.14,58.14v457.698
				c0,32.058,26.082,58.14,58.14,58.14h474.736C565.434,582.997,591.516,556.915,591.516,524.857z M43.34,67.159
				c0-8.45,6.85-15.3,15.3-15.3h474.736c8.45,0,15.3,6.85,15.3,15.3v65.484H43.34V67.159z M43.34,524.857V175.483h505.336v349.374
				c0,8.449-6.85,15.3-15.3,15.3H58.64C50.189,540.157,43.34,533.306,43.34,524.857z"
          />
          <path
            d="M533.376,583.497H58.64c-32.334,0-58.64-26.306-58.64-58.64V67.159c0-32.334,26.306-58.64,58.64-58.64h474.736
				c32.334,0,58.64,26.306,58.64,58.64v457.698C592.016,557.191,565.71,583.497,533.376,583.497z M58.64,9.519
				C26.857,9.519,1,35.376,1,67.159v457.698c0,31.782,25.857,57.64,57.64,57.64h474.736c31.782,0,57.64-25.857,57.64-57.64V67.159
				c0-31.783-25.857-57.64-57.64-57.64H58.64z M533.376,540.657H58.64c-8.712,0-15.8-7.088-15.8-15.8V174.983h506.336v349.874
				C549.176,533.569,542.088,540.657,533.376,540.657z M43.84,175.983v348.874c0,8.161,6.639,14.8,14.8,14.8h474.736
				c8.161,0,14.8-6.639,14.8-14.8V175.983H43.84z M549.176,133.143H42.84V67.159c0-8.712,7.088-15.8,15.8-15.8h474.736
				c8.712,0,15.8,7.088,15.8,15.8V133.143z M43.84,132.143h504.336V67.159c0-8.161-6.639-14.8-14.8-14.8H58.64
				c-8.161,0-14.8,6.639-14.8,14.8V132.143z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default UpButton;
