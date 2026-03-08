FROM node:22.14-bookworm AS development
WORKDIR /workspaces/base
RUN apt-get update

# # --- STAGE 2: Build ---
# FROM development AS build-stage
# RUN npm run build

# # --- STAGE 3: Production ---
# FROM nginx:stable-alpine AS production
# COPY --from=build-stage /workspaces/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]