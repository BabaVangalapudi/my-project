const amenitiesData = [{
    id: 1,
    name: "Parking"
  },
  {
    id: 1,
    name: "Changing Rooms"
  },
  {
    id: 1,
    name: "Washrooms"
  },
  {
    id: 1,
    name: "Shoes and Racquets can be rented"
  }]

const Amenities = () =>{
    return(
        <div className="amenities">
          <h3>Amenities</h3>
          <div className="amenities-list">
            {
              amenitiesData.map((each) => (
                <div key={each.id} className="each">
                  <img className="icon-amenities" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB2aWV3Qm94PSIwIDAgMjEuMDAwMSAyMS4wMDAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSImI3g1NkZFOyYjeDVDNDI7X3gwMDIwXzEiPjxwYXRoIGQ9Im0wIDBoMjF2MjFoLTIxeiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0xMC41MDM4IDEuMzE3NzVjNS4wNzMyOCAwIDkuMTg3NiA0LjExNDMyIDkuMTg3NiA5LjE4NzZzLTQuMTE0MzIgOS4xODc2LTkuMTg3NiA5LjE4NzYtOS4xODc2LTQuMTE0MzItOS4xODc2LTkuMTg3NiA0LjExNDMyLTkuMTg3NiA5LjE4NzYtOS4xODc2em0tMS45MDc5MiAxMi4xNzE4LTIuMjQ5MzUtMi4yNTEyMWMtLjM4MzIxLS4zODM0NC0uMzgzMjktMS4wMDg3MiAwLTEuMzkyMDguMzgzMzctLjM4MzI5IDEuMDExNDMtLjM4MDg5IDEuMzkyMDEgMGwxLjU4NTc4IDEuNTg3MDIgMy45NDQ4OC0zLjk0NDg4Yy4zODMzNy0uMzgzMzcgMS4wMDg3Mi0uMzgzMzcgMS4zOTIwMSAwIC4zODMzNy4zODMyOS4zODI4MiAxLjAwOTE4IDAgMS4zOTIwMWwtNC42NDIwMSA0LjY0MjAxYy0uMzgyODIuMzgyODItMS4wMDg3Mi4zODMzNy0xLjM5MjAxIDAtLjAxMDc3LS4wMTA3Ny0uMDIxMTYtLjAyMTctLjAzMTMxLS4wMzI4NnoiIGZpbGw9IiMwMGJhMDAiLz48L2c+PC9zdmc+" alt="icon3" />
                  <span>{each.name}</span>
                </div>
              ))
            }
          </div>
        </div>
    )
}
export default Amenities;